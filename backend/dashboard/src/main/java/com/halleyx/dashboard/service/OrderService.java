package com.halleyx.dashboard.service;

import com.halleyx.dashboard.entity.CustomerOrder;
import com.halleyx.dashboard.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository repo;

    public OrderService(OrderRepository repo) {
        this.repo = repo;
    }

    public List<CustomerOrder> getOrders(){
        return repo.findAll();
    }
}