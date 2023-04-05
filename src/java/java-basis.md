---
sidebar: heading
title: Java基础常见面试题总结
category: Java
tag:
  - Java基础
---

## Java中的四种访问修饰符是什么？它们分别表示什么含义？

Java中的四种访问修饰符包括public、protected、default和private。
<br>
它们分别表示以下含义：

- public：可以被任何类访问。
- protected：可以被同一包内的类和子类访问。
- default：可以被同一包内的类访问。
- private：只能被本类访问。

## 什么是Java中的多态性？它有哪些实现方式？

 Java中的多态性指的是同一种行为或方法可以在不同的对象上具有不同的表现形式。Java中有两种实现多态性的方式：

- 方法重载（Overloading）：同一个类中有多个方法，它们的方法名相同但参数列表不同，可以通过传递不同的参数来调用不同的方法。
- 方法重写（Overriding）：子类重写了父类的方法，子类可以通过调用父类的方法来实现多态性。

## Java中的final关键字有哪些用途？

Java中的final关键字有以下几种用途：

- final变量：表示该变量的值不能被修改。
- final方法：表示该方法不能被子类重写。
- final类：表示该类不能被继承。
- final参数：表示该参数的值不能被修改。

## Java中的异常处理机制是什么？有哪些常见的异常？

Java中的异常处理机制指的是在程序运行过程中遇到错误或异常情况时，程序可以通过捕获和处理异常来避免程序崩溃。Java中的异常分为两种类型：受检异常（Checked Exception）和非受检异常（Unchecked Exception）。常见的异常包括：

- NullPointerException：当一个对象为null时，调用该对象的方法或属性时会抛出该异常。
- ArrayIndexOutOfBoundsException：当访问数组中不存在的元素时会抛出该异常。
- ClassCastException：当尝试将一个对象强制转换为与其不兼容的类型时会抛出该异常。
- FileNotFoundException：当尝试打开一个不存在的文件时会抛出该异常。
- ArithmeticException：当尝试进行除以零或取模运算时会抛出该异常。

## 什么是Java中的线程？如何创建一个线程？

Java中的线程指的是一条执行路径，可以同时执行多个线程，每个线程独立执行。Java中可以通过继承Thread类或实现Runnable接口来创建一个线程。具体创建线程的方式可以参考以下代码：

```java
// 继承Thread类
public class MyThread extends Thread {
    public void run() {
        // 线程执行的代码
    }
}

// 实现Runnable接口
public class MyRunnable implements Runnable {
    public void run() {
        // 线程执行的代码
    }
}

// 创建线程
public static void main(String[] args) {
    // 继承Thread类
    MyThread thread1 = new MyThread();
    thread1.start();

    // 实现Runnable接口
    MyRunnable runnable = new MyRunnable();
    Thread thread2 = new Thread(runnable);
    thread2.start();
}
```
