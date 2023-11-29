package pe.cibertec.edu.model;

import java.math.BigDecimal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class OrderItem {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderItemId;
	@OneToOne
	@JoinColumn(name="productId")
	private Product product;
	private BigDecimal quantity;
	private BigDecimal discount;
	private BigDecimal subtotal;
	@ManyToOne
	@JoinColumn(name="orderId")
	private Order order;
}
