package huawei.qb;

import java.util.*;

/**
 * huawei.qb-Main9
 * 输入一个int型整数，按照从右向左的阅读顺序，返回一个不含重复数字的新的整数。
 *
 * @classname: Main9
 * @description: 输入一个int型整数，按照从右向左的阅读顺序，返回一个不含重复数字的新的整数。
 * @author: JiangGengchao
 * @date: 2020-08-17
 **/
public class Main9 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        StringBuilder sb = new StringBuilder(input);
        sb.reverse();
        Set<String> inputSet = new HashSet<>();
        for(int i=0;i<sb.length();i++) {
            String s = sb.substring(i, i+1);
            if(inputSet.add(s)) {
                System.out.print(s);
            }
        }
    }
}
