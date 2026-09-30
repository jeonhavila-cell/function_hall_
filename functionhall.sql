CREATE DATABASE IF NOT EXISTS functionhall;
USE functionhall;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'CUSTOMER'
);

CREATE TABLE halls (
    id INT PRIMARY KEY AUTO_INCREMENT,
    hall_name VARCHAR(100) NOT NULL,
    location VARCHAR(200),
    capacity INT,
    price DECIMAL(10,2),
    available BOOLEAN DEFAULT TRUE
);

CREATE TABLE decorations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    decoration_name VARCHAR(100),
    price DECIMAL(10,2)
);

CREATE TABLE food_packages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    food_type VARCHAR(20),
    package_name VARCHAR(100),
    price_per_person DECIMAL(10,2)
);

CREATE TABLE bookings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    hall_id INT,
    booking_date DATE,
    chair_option VARCHAR(30),
    decoration_id INT,
    food_package_id INT,
    total_amount DECIMAL(10,2),
    status VARCHAR(30) DEFAULT 'PENDING',
    payment_method VARCHAR(30),
    payment_status VARCHAR(30) DEFAULT 'PENDING',
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (hall_id) REFERENCES halls(id),
    FOREIGN KEY (decoration_id) REFERENCES decorations(id),
    FOREIGN KEY (food_package_id) REFERENCES food_packages(id)
);

INSERT INTO halls (hall_name,location,capacity,price) VALUES
('Royal Function Hall','Nellore',500,50000),
('Sri Lakshmi Hall','Nellore',300,35000),
('Mini Celebration Hall','Nellore',150,25000);

INSERT INTO decorations (decoration_name,price) VALUES
('Basic Decoration',8000),
('Premium Decoration',15000);

INSERT INTO food_packages (food_type,package_name,price_per_person) VALUES
('VEG','Veg Standard',300),
('NON-VEG','Non-Veg Standard',450);
