package progWeb.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import model.Character;
import model.Universe;

@Controller
public class MyController {

	@RequestMapping(value = "/helloWorld", method = RequestMethod.GET)
	public void myFirstEndPoint(HttpServletRequest request, HttpServletResponse response)
			throws UnsupportedEncodingException, IOException {
		System.out.println("Hello Console");
		response.getOutputStream().write("hello".getBytes("UTF-8"));
	}

	@RequestMapping(value = "/helloWorld", method = RequestMethod.POST)
	public void myPostEndPoint(HttpServletRequest request, HttpServletResponse response)
			throws UnsupportedEncodingException, IOException {
		System.out.println("Bonjour Console");
		response.getOutputStream().write("bonjour".getBytes("UTF-8"));
	}
	
	@RequestMapping(value = "/helloWorldRedirect", method = RequestMethod.POST)
	public void redirectToHello(HttpServletRequest request, HttpServletResponse response)
			throws UnsupportedEncodingException, IOException {
		response.sendRedirect("/helloWorld");
	}



	@RequestMapping(value = "/character", method = RequestMethod.POST)
	public void choiceCharacter(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String charName = request.getParameter("name");
		Character chosen = null;
		Character chosenmonster = null;

		for (Character c : Universe.getCharacters()) {
			if (c.getName().equals(charName)) {
				chosen = c;
			}
		}

		if (chosen != null ) {
			response.setHeader("HP", "" + chosen.getHpMax());
			response.setHeader("attack", "" + chosen.getAttack());
			Cookie cookieName = new Cookie("name", charName);
			response.addCookie(cookieName);
			response.addCookie(new Cookie("HP", "" + chosen.getHpMax()));
			response.addCookie(new Cookie("attack", "" + chosen.getAttack()));
			response.addCookie(new Cookie("dodge", "" + chosen.getDodgeProbability()));

			response.addCookie(new Cookie("numberofmns", "" + Universe.getMonsters().size()));
			chosenmonster=Universe.getMonsters().get(0);
			response.addCookie(new Cookie("monsterid", "0" ));
			response.addCookie(new Cookie("nameM", "" + chosenmonster.getName()));
			response.addCookie(new Cookie("HPM", "" + chosenmonster.getHpMax()));
			response.addCookie(new Cookie("attackM", "" + chosenmonster.getAttack()));
			response.addCookie(new Cookie("dodgeM", "" + chosenmonster.getDodgeProbability()));
		}
		response.sendRedirect("/showCharacter.html");
	}

	@RequestMapping(value = "/netfighter", method = RequestMethod.POST)
	public void nextFoe(HttpServletRequest request, HttpServletResponse response)
			throws UnsupportedEncodingException, IOException {
		int previousFoe = -1;
		for (Cookie c : request.getCookies()) {
			if (c.getName().equals("monsterid")) {
				previousFoe = Integer.parseInt(c.getValue());
			}
		}


		try {
			Character foe = Universe.getMonsters().get(previousFoe + 1);
			response.addCookie(new Cookie("monsterid", "" + (previousFoe + 1)));
			response.addCookie(new Cookie("nameM",""+ foe.getName()));
			response.addCookie(new Cookie("HPM", "" + foe.getHpMax()));
			response.addCookie(new Cookie("attackM", "" + foe.getAttack()));
			response.addCookie(new Cookie("dodgeM", "" + foe.getDodgeProbability()));
		} catch (IndexOutOfBoundsException e) {
			response.getOutputStream().write("Tous les ennemis sont vaincus".getBytes("UTF-8"));
			return;
		}
		response.getOutputStream().write("Au Suivant!".getBytes("UTF-8"));

	}

}
