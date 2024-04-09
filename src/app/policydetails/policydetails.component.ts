import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PolicyExt } from '../models/models';


const moment = _moment;

export const DATE_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-policydetails',
  templateUrl: './policydetails.component.html',
  styleUrls: ['./policydetails.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },

  ]
})

export class PolicydetailsComponent implements OnInit {

  policyDetailsFormGroup!: FormGroup;

  @Output()
  onPolicyDetailsMapped: EventEmitter<PolicyExt> = new EventEmitter<PolicyExt>();


  products: string[] = ['SME','Property', 'Liability', 'Engineering Insurance', 'Marine Insurance'];
  ptypes: string[] = ['Annual Payment', 'Instalments'];
  viewMode: boolean = false;
  policyId: number = 0;

  constructor(
    private _formBuilder: FormBuilder,
    private _adapter: DateAdapter<any>
    ) { }

  ngOnInit(): void {

    this._adapter.setLocale('in');
    this.createPolicyDetailsFormGroup();
    this.emitPolicyDetails(this.policyDetailsFormGroup.value);
    this.subscribeToPolicyDetailsChanges();
  }

    private createPolicyDetailsFormGroup() {
      this.policyDetailsFormGroup = this._formBuilder.group({
        statusCd: new FormControl({ value: 'In Progress', disabled: this.viewMode}),
        productCd: new FormControl({ value: 'SME', disabled: this.viewMode }, Validators.required),
        effectiveDate: new FormControl({ value: moment().add(7, 'days'), disabled: this.viewMode }),
        expiryDate: new FormControl({ value: moment().add({days:7, years:1}), disabled: this.viewMode }),
        paymentType: new FormControl({ value: 'Annual Payment', disabled: this.viewMode })
      });
    }

    private subscribeToPolicyDetailsChanges() {
      if (!this.viewMode) {

        this.policyDetailsFormGroup.valueChanges
          .subscribe(value => {
            this.emitPolicyDetails(value);
          });
      }
    }

  private emitPolicyDetails(value: any) {
    var policyExt = {
      policyId: value.policyId,
      statusCd: value.statusCd,
      productCd: value.productCd,
      effectiveDate: value.effectiveDate.format("DD-MM-YYYY") as string,
      expiryDate: value.expiryDate.format("DD-MM-YYYY") as string,
      paymentType: value.paymentType
    } as PolicyExt;
    this.onPolicyDetailsMapped.emit(policyExt);
  }
}
