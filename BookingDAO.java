package com.functionhall.dao;

import com.functionhall.util.DBConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class BookingDAO {
    public boolean saveBooking(int userId, int hallId, String date,
                               String chairOption, int decorationId,
                               int foodPackageId, double total) {

        String sql = "INSERT INTO bookings " +
            "(user_id,hall_id,booking_date,chair_option,decoration_id," +
            "food_package_id,total_amount,payment_method,payment_status) " +
            "VALUES (?,?,?,?,?,?,?,?,?)";

        try (Connection con = DBConnection.getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {

            ps.setInt(1, userId);
            ps.setInt(2, hallId);
            ps.setString(3, date);
            ps.setString(4, chairOption);
            ps.setInt(5, decorationId);
            ps.setInt(6, foodPackageId);
            ps.setDouble(7, total);
            ps.setString(8, "DEMO");
            ps.setString(9, "SUCCESS");

            return ps.executeUpdate() > 0;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
