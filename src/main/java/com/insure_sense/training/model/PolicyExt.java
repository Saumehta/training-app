package com.insure_sense.training.model;

import javax.persistence.*;

@Entity
public class PolicyExt {

  public PolicyExt(Long policyId, String statusCd, String productCd, String effectiveDate, String expiryDate, String paymentType) {
    this.policyId = policyId;
    this.statusCd = statusCd;
    this.productCd = productCd;
    this.effectiveDate = effectiveDate;
    this.expiryDate = expiryDate;
    this.paymentType = paymentType;
  }

  @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "policy_seq")
    @SequenceGenerator(name = "policy_seq", sequenceName = "policy_seq")
    private Long policyId;

    private String statusCd;

    private String productCd;

    private String effectiveDate;

    private String expiryDate;

    private String paymentType;

    public Long getPolicyId() {
        return policyId;
    }

    public void setPolicyId(Long policyId) {
        this.policyId = policyId;
    }

    public String getStatusCd() {
        return statusCd;
    }

    public void setStatusCd(String statusCd) {
        this.statusCd = statusCd;
    }

    public String getProductCd() {
        return productCd;
    }

    public void setProductCd(String productCd) {
        this.productCd = productCd;
    }

    public String getEffectiveDate() {
      return effectiveDate;
    }

    public void setEffectiveDate(String effectiveDate) {
      this.effectiveDate = effectiveDate;
    }

    public String getExpiryDate() {
      return expiryDate;
    }

    public void setExpiryDate(String expiryDate) {
      this.expiryDate = expiryDate;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }
}
