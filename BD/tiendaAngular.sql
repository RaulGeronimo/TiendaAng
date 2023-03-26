CREATE DATABASE tiendaAngular;

USE tiendaAngular;

CREATE TABLE Producto(
    codigo INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    precio DOUBLE,
    cantidad INT,
    descripcion VARCHAR(300),
    imagen VARCHAR(300),
    fecha TIMESTAMP DEFAULT current_timestamp
);