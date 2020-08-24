package huawei.qb;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

/**
 * 按照指定规则对输入的字符串进行处理。
 *
 * 详细描述：
 *
 * 将输入的两个字符串合并。
 *
 * 对合并后的字符串进行排序，要求为：下标为奇数的字符和下标为偶数的字符分别从小到大排序。这里的下标意思是字符在字符串中的位置。
 *
 * 对排序后的字符串进行操作，如果字符为‘0’——‘9’或者‘A’——‘F’或者‘a’——‘f’，则对他们所代表的16进制的数进行BIT倒序的操作，并转换为相应的大写字符。如字符为‘4’，为0100b，则翻转后为0010b，也就是2。转换后的字符为‘2’； 如字符为‘7’，为0111b，则翻转后为1110b，也就是e。转换后的字符为大写‘E’。
 *
 *
 * 举例：输入str1为"dec"，str2为"fab"，合并为“decfab”，分别对“dca”和“efb”进行排序，排序后为“abcedf”，转换后为“5D37BF”
 */
public class MainInportant30 {
	public static void main(String[] args) {
		Scanner sca = new Scanner(System.in);
		while (sca.hasNext()) {
			String str1 = sca.next();
			String str2 = sca.next();
			System.out.println(processString(str1, str2));
		}
	}

	private static String processString(String str1, String str2) {
		List<String> list1 = new ArrayList<>();
		List<String> list2 = new ArrayList<>();

		StringBuilder sb = new StringBuilder();
		sb.append(str1);
		sb.append(str2);
		String hebin = sb.toString();
		for (int i = 0; i < hebin.length(); i++) {
			String s1 = hebin.substring(i, i + 1);
			if (i % 2 == 0) {
				list1.add(s1);
			} else {
				list2.add(s1);
			}
		}
		Collections.sort(list1);
		Collections.sort(list2);

		int index = 0;
		String[] strs = new String[list1.size() + list2.size()];
		for (int i = 0; i < list1.size(); i++) {
			strs[index] = list1.get(i);
			index += 2;
		}
		index = 1;
		for (int i = 0; i < list2.size(); i++) {
			strs[index] = list2.get(i);
			index += 2;
		}
		StringBuilder newsb = new StringBuilder();
		String regex = "[0-9A-Fa-f]";
		for (int i = 0; i < strs.length; i++) {
			if (strs[i].matches(regex)) {
				newsb.append(convert(strs[i]));
			} else {
				newsb.append(strs[i]);
			}
		}
		return newsb.toString();
	}

	private static String convert(String str) {
		int i = Integer.valueOf(str, 16);
		StringBuilder sb = new StringBuilder(Integer.toBinaryString(i));

		if (sb.length() < 4) {
			int length = sb.length();
			for (int j = 0; j < 4 - length; j++) {
				sb.insert(0, "0");
			}
		}
		sb.reverse();
		i = Integer.valueOf(sb.toString(), 2);
		String dest = Integer.toHexString(i);
		dest = dest.toUpperCase();

		return dest;
	}
}