package huawei.qb;

import java.util.Scanner;

public class Main33 {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		while (in.hasNext()) {
			String ip = in.nextLine();
			String p = in.nextLine();
			System.out.println(iptoTen(ip));
			System.out.println(tentoIp(p));
		}
	}

	private static String tentoIp(String p) {
		long temp = Long.parseLong(p);
		String ip = Long.toBinaryString(temp);
		StringBuilder originalIp = new StringBuilder();

		StringBuilder sb = new StringBuilder();
		if (ip.length() < 32) {
			for (int i = 0; i < (32 - ip.length()); i++) {
				sb.append(0);
			}
			sb.append(ip);
		} else if (ip.length() == 32) {
			sb.append(ip);
		}

		for (int i = 0; i < sb.length(); i = i + 8) {
			originalIp.append(Integer.parseInt(sb.substring(i, i + 8), 2));
			if (i < 24) {
				originalIp.append(".");
			}
		}
		return originalIp.toString();
	}

	private static long iptoTen(String ip) {
		String[] arr = ip.split("\\.");
		long n = Long.parseLong(arr[0]);

		for (int i = 1; i < arr.length; i++) {
			n = n << 8;
			n = n + Long.parseLong(arr[i]);
		}

		return n;
	}
}