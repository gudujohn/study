package huawei.qb;

import java.util.Scanner;

/**
 * huawei.qb-Main3
 * 明明想在学校中请一些同学一起做一项问卷调查，为了实验的客观性，他先用计算机生成了N个1到1000之间的随机整数（N≤1000），对于其中重复的数字，只保留一个，把其余相同的数去掉，不同的数对应着不同的学生的学号。然后再把这些数从小到大排序，按照排好的顺序去找同学做调查。请你协助明明完成“去重”与“排序”的工作(同一个测试用例里可能会有多组数据，希望大家能正确处理)。
 *
 * @classname: Main3
 * @description: 明明想在学校中请一些同学一起做一项问卷调查，为了实验的客观性，他先用计算机生成了N个1到1000之间的随机整数（N≤1000），对于其中重复的数字，只保留一个，把其余相同的数去掉，不同的数对应着不同的学生的学号。然后再把这些数从小到大排序，按照排好的顺序去找同学做调查。请你协助明明完成“去重”与“排序”的工作(同一个测试用例里可能会有多组数据，希望大家能正确处理)。
 * @author: JiangGengchao
 * @date: 2020-08-15
 **/
public class Main3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNext()) {
            int[] input = null;
            int count = scanner.nextInt();
            if(count > 0) {
                for (int i=0; i<count; i++){
                    input = appendArray(input, scanner.nextInt());
                }
            }
            input = getOrderResult(input);
            if(input!=null && input.length>0) {
                for (int outPutEle : input) {
                    System.out.println(outPutEle);
                }
            }
        }
    }
    private static int[] getOrderResult(int[] input) {
        int[] result = null;
        if(input != null && input.length > 0) {
            //去重
            for (int i=0; i<input.length; i++) {
                int index = getEleIndex(result, input[i]);
                if(index == -1) {
                    result = appendArray(result, input[i]);
                }
            }
            // 从大到小排序
            for (int i=0; i<result.length-1; i++) {
                for (int j=0; j<result.length-1-i; j++) {
                    if(result[j] > result[j+1]) {
                        int temp = result[j+1];
                        result[j+1] = result[j];
                        result[j] = temp;
                    }
                }
            }
        }
        return result;
    }
    private static int getEleIndex(int[] input, int ele) {
        if(input != null && input.length > 0) {
            for (int i=0; i<input.length; i++) {
                if(ele == input[i]){
                    return i;
                }
            }
        }
        return -1;
    }
    private static int[] appendArray(int[] src, int target) {
        int[] reslut = null;
        if(src == null || src.length == 0) {
            reslut = new int[] { target };
        } else {
            reslut = new int[src.length + 1];
            for (int i=0; i<src.length; i++) {
                reslut[i] = src[i];
            }
            reslut[src.length] = target;
        }
        return reslut;
    }
}
