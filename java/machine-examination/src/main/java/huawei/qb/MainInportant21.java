package huawei.qb;

import java.util.Scanner;

/**
 * 密码是我们生活中非常重要的东东，我们的那么一点不能说的秘密就全靠它了。哇哈哈. 接下来渊子要在密码之上再加一套密码，虽然简单但也安全。 假设渊子原来一个BBS上的密码为zvbo9441987,为了方便记忆，他通过一种算法把这个密码变换成YUANzhi1987，这个密码是他的名字和出生年份，怎么忘都忘不了，而且可以明目张胆地放在显眼的地方而不被别人知道真正的密码。
 * 他是这么变换的，大家都知道手机上的字母： 1--1， abc--2, def--3, ghi--4, jkl--5, mno--6, pqrs--7, tuv--8 wxyz--9, 0--0,就这么简单，渊子把密码中出现的小写字母都变成对应的数字，数字和其他的符号都不做变换，
 * 声明：密码中没有空格，而密码中出现的大写字母则变成小写之后往后移一位，如：X，先变成小写，再往后移一位，不就是y了嘛，简单吧。记住，z往后移是a哦。
 */
public class MainInportant21 {
	private static final String KEY_SRC = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	private static final String KEY_TAR = "bcdefghijklmnopqrstuvwxyza22233344455566677778889999";

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		while (scanner.hasNext()) {
			String plainText = scanner.nextLine();
			String cipherText = encryption(plainText);
			System.out.println(cipherText);
		}
	}

	private static String encryption(String plainText) {
		StringBuilder cipherTextStringBuilder = new StringBuilder();
		char[] keyTarArr = KEY_TAR.toCharArray();
		for (char plainChar : plainText.toCharArray()) {
			if (KEY_SRC.contains(String.valueOf(plainChar))) {
				cipherTextStringBuilder.append(keyTarArr[KEY_SRC.indexOf(plainChar)]);
			} else {
				cipherTextStringBuilder.append(plainChar);
			}
		}
		return cipherTextStringBuilder.toString();
	}
}