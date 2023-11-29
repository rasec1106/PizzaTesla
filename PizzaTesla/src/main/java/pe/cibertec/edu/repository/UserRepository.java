package pe.cibertec.edu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pe.cibertec.edu.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
