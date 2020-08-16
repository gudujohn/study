package huawei.qb;

import java.util.Scanner;

/**
 * huawei.qb-Main1
 * 计算字符串最后一个单词的长度，单词以空格隔开。
 *
 * @classname: Main1
 * @description: 计算字符串最后一个单词的长度，单词以空格隔开。
 * @author: JiangGengchao
 * @date: 2020-08-15
 **/
public class Main1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        String lastWord = getLastWord(input);
        if(lastWord != null) {
            System.out.print(lastWord.length());
        } else {
            System.out.print("0");
        }
    }
    private static String getLastWord(String input) {
        String[] words = input.split(" ");
        if(words != null && words.length > 0) {
            return words[words.length-1];
        }
        return null;
    }
}
