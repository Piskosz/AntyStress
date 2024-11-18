package com.example.antystress;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RejestracjaRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public int save2(List<Rejestration> rejestrations) {
        rejestrations.forEach(rejestration -> jdbcTemplate
                .update("INSERT INTO Rejestration(Login, Haslo, Mail) VALUES(?,?,?)",
                        rejestration.getLogin(), rejestration.getHaslo(), rejestration.getMail()
                ));
        return 1;
    }

    public Rejestration getByLogin(String login) {
        String sql = "SELECT * FROM Rejestration WHERE login = ? LIMIT 1";
        List<Rejestration> results = jdbcTemplate.query(
                sql,
                BeanPropertyRowMapper.newInstance(Rejestration.class),
                login
        );
        return results.isEmpty() ? null : results.get(0);
    }

    public List<Rejestration> getAll_3() {
        return jdbcTemplate.query("SELECT * FROM Rejestration;", BeanPropertyRowMapper.newInstance(Rejestration.class));
    }
}
