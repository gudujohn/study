package com.demo;

import java.util.Scanner;

/**
 * com.demo-Test2
 *
 * @classname: Test2
 * @description:
 * @author: JiangGengchao
 * @date: 2020-09-19
 **/
public class Test2 {
	private static final char[][] MAP = { { '[', ']' }, { '(', ')' }, { '{', '}' } };

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String input = scanner.nextLine();
		System.out.println(isRight(input));
	}

	private static boolean isRight(String input) {
		if (input != null && input.length() > 0) {
			char[] arr = input.toCharArray();
			char[] seq = new char[0];
			for (int i = 0; i < arr.length; i++) {
				seq = next(seq, arr[i]);
			}
			return seq.length == 0;
		}
		return true;
	}

	private static char[] next(char[] src, char tar) {
		Character oppside = getOppside(tar);
		if (src != null && src.length > 0) {
			if (src[src.length - 1] == oppside) {
				src = removeLast(src);
			} else {
				src = append(src, tar);
			}
		} else {
			src = append(src, tar);
		}
		return src;
	}

	private static Character getOppside(char tar) {
		for (int k = 0; k < MAP.length; k++) {
			if (MAP[k][0] == tar) {
				return MAP[k][1];
			} else if (MAP[k][1] == tar) {
				return MAP[k][0];
			}
		}
		Character c = null;
		return c;
	}

	private static char[] removeLast(char[] src) {
		char[] result = new char[0];
		if (src != null && src.length > 0) {
			result = new char[src.length - 1];
			for (int i = 0; i < src.length - 1; i++) {
				result[i] = src[i];
			}
		}
		return result;
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
