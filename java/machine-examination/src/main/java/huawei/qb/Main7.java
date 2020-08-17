package huawei.qb;

import java.util.Scanner;

/**
 * huawei.qb-Main7
 * 写出一个程序，接受一个正浮点数值，输出该数值的近似整数值。如果小数点后数值大于等于5,向上取整；小于5，则向下取整。
 *
 * @classname: Main7
 * @description: 写出一个程序，接受一个正浮点数值，输出该数值的近似整数值。如果小数点后数值大于等于5,向上取整；小于5，则向下取整。
 * @author: JiangGengchao
 * @date: 2020-08-17
 **/
public class Main7 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double input = scanner.nextDouble();
        long output = Math.round(input);
        System.out.print(output);
    }
}
