package huawei.qb;

import java.util.*;

/**
 * 编写一个程序，将输入字符串中的字符按如下规则排序。 规则 1 ：英文字母从 A 到 Z 排列，不区分大小写。
 */
public class Main26 {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		while (in.hasNext()) {
			String str = in.nextLine();
			char[] chr = str.toCharArray();
			List<Character> list = new ArrayList<>();
			for (Character ch : chr) {
				if (Character.isLetter(ch))
					list.add(ch);
			}
			Collections.sort(list, new Comparator<Character>() {
				public int compare(Character c1, Character c2) {
					return Character.toLowerCase(c1) - Character.toLowerCase(c2);
				}
			});
			int cnt = 0;
			for (int i = 0; i < chr.length; i++) {
				if (Character.isLetter(chr[i])) {
					chr[i] = list.get(cnt);
					cnt++;
				}
			}
			System.out.println(chr);
		}
	}
}