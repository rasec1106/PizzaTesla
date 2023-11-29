package pe.cibertec.edu.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import jakarta.persistence.Entity;

@Entity
@Data
public class Product {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;
    private Long categoryId;
    private String name;
    private String description;
    private double price;
    private String ingredients;
    private String preparationTime;
    private String imageUrl;
	    
}
