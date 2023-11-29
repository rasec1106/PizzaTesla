package pe.cibertec.edu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.cibertec.edu.model.Order;
import pe.cibertec.edu.model.OrderItem;
import pe.cibertec.edu.repository.OrderRepository;
import pe.cibertec.edu.service.OrderService;

import java.util.List;
import java.util.Set;

@Service
public class OrderServiceImpl implements OrderService {
	@Autowired
	OrderRepository orderRepository;

	@Override
	public List<Order> getOrders() {
		return orderRepository.findAll();
	}
	
	@Override
	public Order getOrderById(Long id) {
		return orderRepository.findById(id).orElse(null);
	}

	@Override
	public Order createOrder(Order order, Set<OrderItem> orderItems) {
		orderItems.forEach(orderItem -> order.addOrderItem(orderItem));
		return orderRepository.save(order);
	}

	@Override
	public List<Order> getOrdersByUserId(Long userId) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
