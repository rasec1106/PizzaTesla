package pe.cibertec.edu.dto;

import java.util.Set;

import lombok.Data;
import pe.cibertec.edu.model.Order;
import pe.cibertec.edu.model.OrderItem;

@Data
public class OrderRequestDTO {
	public Order order;
    public Set<OrderItem> orderItems;
}
