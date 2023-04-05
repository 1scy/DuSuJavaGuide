import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    { text: "主页", icon: "home", link: "/" },
  { text: "技术书籍", icon: "autumn", link: "/books/" },
  {
    text: "面试指南",
    icon: "java",
    children: [
  {
    text: "Java",
    prefix: "/java/",
    children: [
      {text: "基础", link: "java-basis.md"},
      {text: "集合", link: "java-collection.md"},
      {text: "并发", link: "java-concurrent.md"},
      {text: "JVM", link: "jvm.md"},
      {text: "Java8", link: "java8.md"},
    ]
  },
        {
            text: "框架",
            prefix: "/framework/",
            children: [
                {text: "Spring面试题", link: "spring.md"},
                {text: "SpringMVC面试题", link: "springmvc.md"},
                {text: "Mybatis面试题", link: "mybatis.md"},
                {text: "SpringBoot面试题", link: "springboot.md"},
                {text: "SpringCloud详解", link: "springcloud.md"},
                {text: "SpringCloud面试题", link: "springcloud-interview.md"},
                {text: "Netty详解", link: "netty.md"},
            ]
        },
        {
            text: "消息队列",
            prefix: "/message-queue/",
            children: [
                {text: "消息队列面试题", link: "mq.md"},
                {text: "RabbitMQ面试题", link: "rabbitmq.md"},
                {text: "Kafka面试题", link: "kafka.md"},
            ]
        },
        {
            text: "关系型数据库",
            prefix: "/database/",
            children: [
                {text: "MySQL基础", link: "mysql-basic.md"},
                {text: "MySQL面试题", link: "mysql.md"},
                {text: "MySQL执行计划详解", link: "mysql-execution-plan.md"},
            ]
        },
        {
            text: "非关系型数据库",
            prefix: "/redis/",
            children: [
                {text: "Redis基础", link: "redis-basic.md"},
                {text: "Redis面试题", link: "redis.md"},
                {text: "ElasticSearch面试题", link: "elasticsearch.md"},
            ]
        },
       
]
},
/* {
  text: "工具",
  icon: "tool",
  children: [
      {
          text: "开发工具",
          children: [
              {text: "Git详解", link: "/tools/git/"},
              {text: "Maven详解", link: "/tools/maven/"},
              {text: "Docker详解", link: "/tools/docker/"},
              {text: "Linux常用命令", link: "/tools/linux"},
    {text: "Nginx面试题", link: "https://mp.weixin.qq.com/s/SKKEeYxif0wWJo6n57rd6A"},
          ]
      },
      {
          text: "编程利器",
          children: [
              {text: "markdown编辑器", link: "/tools/typora-overview.md"},
          ]
      },
  ]
}, */
/* {
  text: "关于",
  icon: "about",
  children: [
      {text: "关于我", link: "/about/introduce.md"},
      {text: "网站日记", link: "/other/site-diary.md"},
      {text: "联系我", link: "/about/contact.md"},
      {text: "留言区", link: "/other/leave-a-message.md"},
  ]
}, */
]);
