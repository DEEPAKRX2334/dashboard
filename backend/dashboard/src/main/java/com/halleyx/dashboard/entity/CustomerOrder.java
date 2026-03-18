package com.halleyx.dashboard.entity;

import jakarta.persistence.*;

@Entity
public class CustomerOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String product;
    private int amount;

    public CustomerOrder() {}

    public CustomerOrder(String email,String product,int amount) {
        this.email=email;
        this.product=product;
        this.amount=amount;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getProduct() {
        return product;
    }

    public int getAmount() {
        return amount;
    }

    public void setEmail(String email) {
        this.email=email;
    }

    public void setProduct(String product) {
        this.product=product;
    }

    public void setAmount(int amount) {
        this.amount=amount;
    }

}