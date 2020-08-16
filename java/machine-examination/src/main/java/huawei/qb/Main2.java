package huawei.qb;

import java.util.Scanner;

/**
 * huawei.qb-Main2
 * 写出一个程序，接受一个由字母和数字组成的字符串，和一个字符，然后输出输入字符串中含有该字符的个数。不区分大小写。
 *
 * @classname: Main2
 * @description: 写出一个程序，接受一个由字母和数字组成的字符串，和一个字符，然后输出输入字符串中含有该字符的个数。不区分大小写。
 * @author: JiangGengchao
 * @date: 2020-08-15
 **/
public class Main2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input1 = scanner.nextLine();
        String input2 = scanner.nextLine();
        System.out.print(countChar(input1.toUpperCase().toCharArray(), input2.toUpperCase().toCharArray()[0]));
    }
    private static int countChar(char[] targetChars, char compareChar) {
        int count = 0;
        if(targetChars != null && targetChars.length > 0) {
            for(char tempChar : targetChars) {
                if(tempChar == compareChar) {
                    count ++;
                }
            }
        }
        return count;
    }
}
