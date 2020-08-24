package huawei.qb;

import java.util.Arrays;
import java.util.Scanner;

/**
 * 给定n个字符串，请对n个字符串按照字典序排列。
 */
public class Main14 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        if(n > 0) {
            String[] inputs = new String[n];
            for(int i=0; i<n; i++) {
                inputs[i] = scanner.next();
            }
            Arrays.sort(inputs);
            for(int i=0; i<n; i++) {
                System.out.println(inputs[i]);
            }
        }
    }
}
