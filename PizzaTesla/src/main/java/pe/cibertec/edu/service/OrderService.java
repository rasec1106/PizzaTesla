package pe.cibertec.edu.service;

import pe.cibertec.edu.model.Order;

import java.util.List;
import java.util.Set;

import pe.cibertec.edu.model.OrderItem;

public interface OrderService {
	List<Order> getOrders();
	Order getOrderById(Long id);
	Order createOrder(Order order, Set<OrderItem> orderItems);
	List<Order> getOrdersByUserId(Long userId);
}
