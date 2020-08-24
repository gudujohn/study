package huawei.qb;

import java.util.Scanner;

public class MainInportant16 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNextInt()) {
            int money = scanner.nextInt();
            int num = scanner.nextInt();
            Good[][] goods = new Good[60][3];
            for (int i = 0; i < num; i++) {
                int price = scanner.nextInt();
                int wight = scanner.nextInt();
                int parent = scanner.nextInt();
                Good good = new Good(price, price * wight);
                if (parent == 0) {
                    goods[i][0] = good;
                } else {
                    if (goods[parent-1][1] == null) {
                        goods[parent-1][1] = good;
                    } else {
                        goods[parent-1][2] = good;
                    }
                }
            }
            System.out.println(getMaxValue(goods, money, num));
        }
    }
    public static int getMaxValue(Good[][] goods, int money, int num) {
        int[] f = new int[money+1];
        for (int i = 0; i < num; i++) {
            for (int j = money; j >= 0 && goods[i][0] != null; j--) {
                int max = f[j];
                int price = goods[i][0].getPrice();
                int value = goods[i][0].getValue();
                if (j >= price && max < f[j - price] + value) {
                    max = f[j - price] + value;
                }
                if (goods[i][1] != null) {
                    price = goods[i][0].getPrice() + goods[i][1].getPrice();
                    value = goods[i][0].getValue() + goods[i][1].getValue();
                    if (j >= price && max <  f[j - price] + value) {
                        max = f[j - price] + value;
                    }
                }
                if (goods[i][2] != null) {
                    price = goods[i][0].getPrice() + goods[i][1].getPrice() + goods[i][2].getPrice();
                    value = goods[i][0].getValue() + goods[i][1].getValue() + goods[i][2].getValue();
                    if (j >= price && max < f[j - price] + value) {
                        max = f[j - price] + value;
                    }
                }
                f[j] = max;
            }
        }
        return f[money];
    }
}
class Good {
    private int price;
    private int value;
    public Good(int price, int value) {
        this.price = price;
        this.value = value;
    }
    public int getPrice() {
        return price;
    }
    public int getValue() {
        return value;
    }
}