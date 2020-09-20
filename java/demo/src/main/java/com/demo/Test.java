package com.demo;

import java.util.Scanner;

/**
 * com.demo-Test
 *
 * @classname: Test
 * @description:
 * @author: JiangGengchao
 * @date: 2020-09-19
 **/
public class Test {
	/**
	 * most long
	 * 
	 * @param args
	 */
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String input = scanner.nextLine();
		System.out.println(getLength(input));
	}

	private static int getLength(String input) {
		if (input != null && input.length() > 0) {
			char[] inputCharArray = input.toCharArray();
			char[] noRepeat = new char[0];
			char[] noRepeat2 = new char[0];
			boolean isSame = true;
			for (int i = 0; i < inputCharArray.length; i++) {
				char c = inputCharArray[i];
				if (isSame && !contains(noRepeat, c)) {
					noRepeat = append(noRepeat, c);
				} else {
					if (noRepeat2.length == 0) {
						noRepeat2 = append(noRepeat2, c);
					} else if (noRepeat2.length > 0 && !contains(noRepeat2, c)) {
						noRepeat2 = append(noRepeat2, c);
					}
					if (!isSame) {
						noRepeat2 = new char[1];
						noRepeat2[0] = c;
					}
					isSame = false;
				}
				if (noRepeat2.length > noRepeat.length) {
					noRepeat = noRepeat2;
					noRepeat2 = new char[0];
					isSame = true;
				}
			}
			return noRepeat.length;
		}
		return 0;
	}

	private static boolean contains(char[] src, char tar) {
		if (src != null && src.length > 0) {
			for (char c : src) {
				if (c == tar) {
					return true;
				}
			}
		}
		return false;
	}

	private static char[] append(char[] src, char tar) {
		char[] result;
		if (src != null && src.length > 0) {
			result = new char[src.length + 1];
			for (int i = 0; i < src.length; i++) {
				result[i] = src[i];
			}
			result[src.length] = tar;
		} else {
			result = new char[1];
			result[0] = tar;
		}
		return result;
	}
}
