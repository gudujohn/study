package huawei.qb;

import java.util.Scanner;

/**
 * 将一个英文语句以单词为单位逆序排放。例如“I am a boy”，逆序排放后为“boy a am I”
 * 所有单词之间用一个空格隔开，语句中除了英文字母外，不再包含其他字符
 */
public class Main13 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        System.out.println(reverse(input));
    }

    /**
     * 反转句子
     *
     * @param sentence 原句子
     * @return 反转后的句子
     */
    public static String reverse(String sentence) {
        StringBuilder sb = new StringBuilder();
        if(sentence != null && sentence.length() > 0) {
            String[] words = sentence.split(" ");
            for(int i=words.length-1; i>=0; i--) {
                sb.append(words[i]);
                if(i>0) {
                    sb.append(" ");
                }
            }
        }
        return sb.toString();
    }
}