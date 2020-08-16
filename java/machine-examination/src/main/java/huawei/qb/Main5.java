package huawei.qb;

import java.util.Scanner;

/**
 * huawei.qb-Main5
 * 写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。（多组同时输入 ）
 *
 * @classname: Main5
 * @description: 写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。（多组同时输入 ）
 * @author: JiangGengchao
 * @date: 2020-08-16
 **/
public class Main5 {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNextLine()) {
            String input = scanner.nextLine();
            String hexString = input;
            if(input.startsWith("0x")) {
                hexString = input.substring(2);
            }
            int decimal = Integer.parseInt(hexString, 16);
            System.out.println(decimal);
        }
    }
}
