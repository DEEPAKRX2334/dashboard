package com.halleyx.dashboard.controller;

import com.halleyx.dashboard.entity.CustomerOrder;
import com.halleyx.dashboard.repository.OrderRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {

    private final OrderRepository orderRepository;

    public OrderController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @GetMapping
    public List<CustomerOrder> getOrders() {

        return orderRepository.findAll();

    }

}