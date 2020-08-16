package huawei.qb;

import java.util.Scanner;

/**
 * huawei.qb-Main6
 * 功能:输入一个正整数，按照从小到大的顺序输出它的所有质因子（重复的也要列举）（如180的质因子为2 2 3 3 5 ）  最后一个数后面也要有空格
 *
 * @classname: Main6
 * @description: 功能:输入一个正整数，按照从小到大的顺序输出它的所有质因子（重复的也要列举）（如180的质因子为2 2 3 3 5 ）  最后一个数后面也要有空格
 * @author: JiangGengchao
 * @date: 2020-08-17
 **/
public class Main6 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int input = scanner.nextInt();
        System.out.print(primeFactorization(input));
    }
    private static String primeFactorization(int input) {
        String rs = "";
        if(input>1){
            for(int i=2; i<=input; i++) {
                if(input % i == 0) {
                    rs += i + " ";
                    rs += primeFactorization(input / i);
                    break;
                }
            }
        }
        return rs;
    }
}
