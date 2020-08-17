package huawei.qb;

import javax.swing.*;
import java.util.*;

/**
 * huawei.qb-Main8
 * 数据表记录包含表索引和数值（int范围的整数），请对表索引相同的记录进行合并，即将相同索引的数值进行求和运算，输出按照key值升序进行输出。
 *
 * @classname: Main8
 * @description: 数据表记录包含表索引和数值（int范围的整数），请对表索引相同的记录进行合并，即将相同索引的数值进行求和运算，输出按照key值升序进行输出。
 * @author: JiangGengchao
 * @date: 2020-08-17
 **/
public class Main8 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while(scanner.hasNext()) {
            int count = scanner.nextInt();
            if(count > 0) {
                Map<Integer, Integer> inputMap = new HashMap<>();
                for(int i=0; i<count; i++) {
                    int key = scanner.nextInt();
                    int value = scanner.nextInt();
                    Integer oldValue = inputMap.get(key);
                    if(oldValue != null) {
                        inputMap.put(key, oldValue + value);
                    } else {
                        inputMap.put(key, value);
                    }
                }
                Set<Integer> keySet = inputMap.keySet();
                List<Integer> keyList = new ArrayList<>(keySet);
                Collections.sort(keyList);
                for(Integer key : keyList) {
                    System.out.println(key + " " + inputMap.get(key));
                }
            }
        }
    }
}
