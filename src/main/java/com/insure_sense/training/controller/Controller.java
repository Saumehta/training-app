package com.insure_sense.training.controller;

import com.insure_sense.training.model.PolicyExt;
import com.insure_sense.training.repository.PolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class Controller {

    @Autowired
    PolicyRepository policyRepository;

    @PostMapping("/policy/create")
    public Long createPolicy(@RequestBody PolicyExt policy) {

      PolicyExt createdPolicy = policyRepository.saveAndFlush(policy);
      return createdPolicy.getPolicyId();
    }

}
