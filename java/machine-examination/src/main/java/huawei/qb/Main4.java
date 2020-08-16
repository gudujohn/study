package huawei.qb;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 * huawei.qb-Main4
 * •连续输入字符串，请按长度为8拆分每个字符串后输出到新的字符串数组； •长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。
 *
 * @classname: Main4
 * @description: •连续输入字符串，请按长度为8拆分每个字符串后输出到新的字符串数组； •长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。
 * @author: JiangGengchao
 * @date: 2020-08-16
 **/
public class Main4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNextLine()) {
            String input = scanner.nextLine();
            List<String> result = getRuleResult(input.toCharArray());
            if(result.size() > 0) {
                for (String r : result) {
                    System.out.println(r);
                }
            }
        }
    }
    private static List<String> getRuleResult(char[] input) {
        List<String> result = new ArrayList<>();
        if(input != null && input.length > 0) {
            int count = 0;
            char[] tempResult = new char[8];
            for (char c : input) {
                if(count == 8) {
                    result.add(String.valueOf(tempResult));
                    tempResult = new char[8];
                    count = 0;
                }
                tempResult[count] = c;
                count ++;
            }
            // 补0
            if(count < 8) {
                for(int i=count; i<8; i++) {
                    tempResult[i] = '0';
                }
            }
            result.add(String.valueOf(tempResult));
        }
        return result;
    }
}
