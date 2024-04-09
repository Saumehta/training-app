package com.insure_sense.training.repository;

import com.insure_sense.training.model.PolicyExt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PolicyRepository extends JpaRepository<PolicyExt, Long> {
}
