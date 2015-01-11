package controllers;

import com.typesafe.plugin.MailerAPI;
import com.typesafe.plugin.MailerPlugin;
import play.*;
import play.data.Form;
import play.mvc.*;

import views.html.*;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Application extends Controller {

    private static String ADMIN_EMAIL = Play.application().configuration().getString("admin.email");

    public static Result index() {
        return ok(index.render());
    }

    public static Result email() {

        String name = Form.form().bindFromRequest().data().get("name");
        String email = Form.form().bindFromRequest().data().get("email");
        String phone = Form.form().bindFromRequest().data().get("phone");
        String message = Form.form().bindFromRequest().data().get("message");

        MailerAPI mail = play.Play.application().plugin(MailerPlugin.class).email();
        mail.setSubject("New message from website visitor " + name);
        mail.setRecipient(ADMIN_EMAIL);
        mail.setFrom(ADMIN_EMAIL);
        String body = "Received an inquiry from the website's contact form at:<br/><br/>" +
                "Name: " + name + "<br/>" +
                "Email: " + email + "<br/>" +
                "Phone: " + phone + "<br/>" +
                "Message: " + message + "<br/>";
        mail.sendHtml(body);

        return ok(index.render());
    }

}
