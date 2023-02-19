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

/* INSERT INTO Producto
    (nombre, precio, cantidad, descripcion, imagen)
VALUES
    ('Pelota', 200, 3, 'Playa, de Colores', 'https://www.soyvisual.org/sites/default/files/styles/twitter_card/public/images/photos/pla_0008.jpg?itok=GgKrJK8c'),
    ('Balon', 150, 5, 'Balon de Futbol Soccer', 'https://ep01.epimg.net/verne/imagenes/2015/09/11/articulo/1441988783_165642_1442161238_sumario_normal.jpg'),
    ('Balon', 176, 6, 'Balon de Basquet', 'https://media.istockphoto.com/photos/basketball-picture-id170096587?k=20&m=170096587&s=612x612&w=0&h=Umu6ELi7aPSpCPE7hMPKWVYZUoRfdNek2ieBI5RrCCs='),
    ('Balon', 164, 2, 'Balon de Futbol Americano', 'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00088776834858L.jpg'); */