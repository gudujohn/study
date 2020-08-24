package huawei.qb;

import java.util.Scanner;

public class Main87 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		while (sc.hasNext()) {
			String input = sc.nextLine();
			int score = getScore(input);
			if (score >= 90) {
				System.out.println("VERY_SECURE");
			} else if (score >= 80) {
				System.out.println("SECURE");
			}

			else if (score >= 70) {
				System.out.println("VERY_STRONG");
			} else if (score >= 60) {
				System.out.println("STRONG");
			} else if (score >= 50) {
				System.out.println("AVERAGE");
			} else if (score >= 25) {
				System.out.println("WEAK");
			} else if (score >= 0) {
				System.out.println("VERY_WEAK");
			}
		}
	}

	private static int getScore(String input) {
		int score = 0;
		if (input.length() >= 8) {
			score += 25;
		} else if (input.length() >= 5) {
			score += 10;
		} else if (input.length() <= 4) {
			score += 5;
		}
		int upplet = 0;
		int dowlet = 0;
		int numlet = 0;
		int othlet = 0;
		for (int i = 0; i < input.length(); i++) {
			if (input.charAt(i) >= 'A' && input.charAt(i) <= 'Z') {
				upplet++;
			} else if (input.charAt(i) >= 'a' && input.charAt(i) <= 'z') {
				dowlet++;
			} else if (input.charAt(i) >= '0' && input.charAt(i) <= '9') {
				numlet++;
			} else {
				othlet++;
			}
		}
		if ((upplet != 0 && dowlet == 0) || (upplet == 0 && dowlet != 0)) {
			score += 10;
		} else if (upplet != 0 && dowlet != 0) {
			score += 20;
		}
		if (numlet == 1) {
			score += 10;
		} else if (numlet > 1) {
			score += 20;
		}
		if (othlet == 1) {
			score += 10;
		} else if (othlet > 1) {
			score += 25;
		}
		if (numlet != 0 && upplet != 0 && dowlet != 0 && othlet != 0) {
			score += 5;
		} else if (numlet != 0 && (upplet != 0 || dowlet != 0) && othlet != 0) {
			score += 3;
		} else if (numlet != 0 && (upplet != 0 || dowlet != 0)) {
			score += 2;
		}
		return score;
	}
}