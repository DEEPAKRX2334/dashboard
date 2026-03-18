package com.halleyx.dashboard.repository;

import com.halleyx.dashboard.entity.CustomerOrder;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<CustomerOrder,Long> {

}