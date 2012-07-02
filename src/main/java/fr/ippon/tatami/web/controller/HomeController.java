package fr.ippon.tatami.web.controller;

import fr.ippon.tatami.domain.User;
import fr.ippon.tatami.security.AuthenticationService;
import fr.ippon.tatami.service.UserService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.inject.Inject;

/**
 * @author Julien Dubois
 */
@Controller
public class HomeController {

    private final Log log = LogFactory.getLog(HomeController.class);

    @Inject
    private UserService userService;

    @Inject
    private AuthenticationService authenticationService;

    @RequestMapping(value = "/")
    public ModelAndView home(@RequestParam(required = false) String tag, @RequestParam(required = false) String search) {
        log.debug("Home page");
        ModelAndView mv = new ModelAndView("home");
        User currentUser = authenticationService.getCurrentUser();
        mv.addObject("user", currentUser);
        mv.addObject("tag", tag);
        mv.addObject("search", search);
        return mv;
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login() {
        log.debug("Login page");
        return "login";
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String register(@RequestParam String email) {
        log.debug("Registration page");
        User user = new User();
        user.setLogin(email);
        userService.registerUser(user);
        return "redirect:/tatami/login";
    }

    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public ModelAndView validateRegistration(@RequestParam String key) {
        ModelAndView mv = new ModelAndView("register");
        String login = userService.validateRegistration(key);
        mv.addObject("login", login);
        return mv;
    }
}
