package huawei.qb;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

/**
 * huawei.qb-Main10
 * 编写一个函数，计算字符串中含有的不同字符的个数。字符在ACSII码范围内(0~127)，换行表示结束符，不算在字符里。不在范围内的不作统计。多个相同的字符只计算一次
 *
 * @classname: Main10
 * @description: 编写一个函数，计算字符串中含有的不同字符的个数。字符在ACSII码范围内(0~127)，换行表示结束符，不算在字符里。不在范围内的不作统计。多个相同的字符只计算一次
 * @author: JiangGengchao
 * @date: 2020-08-18
 **/
public class Main10 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        char[] inputCharArr = input.toCharArray();
        int count = 0;
        if(inputCharArr != null && inputCharArr.length>0) {
            Set<Character> set = new HashSet<>();
            for(char c : inputCharArr) {
                if(set.add(c)) {
                    int ascii = (int)c;
                    if(ascii >= 0 && ascii <= 127) {
                        count ++;
                    }
                }
            }
        }
        System.out.println(count);
    }
}
