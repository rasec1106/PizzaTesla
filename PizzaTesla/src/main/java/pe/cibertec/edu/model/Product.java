package pe.cibertec.edu.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.Entity;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int categoriaId;
    private String nombre;
    private String descripcion;
    private int precio;
    private String ingredientes;
    private String tiempoPreparacion;
    private String imagen;
	    
}
