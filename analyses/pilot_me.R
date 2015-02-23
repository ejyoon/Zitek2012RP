rm(list = ls())
library(jsonlite)
source("/Users/ericang/Documents/Courses/Psych254/zt12rp/useful.R")

json_file <- readLines("/Users/ericang/Documents/Courses/Psych254/zt12rp/json_test1.txt")
json_file[1]
json_file_str = paste(json_file, collapse = "")
json_file_str = gsub(",}", "}", json_file_str)

jso = jsonlite::fromJSON(json_file_str)
class(jso)
length(jso)
names(jso)
jso

jso1 <- data.frame(jso)

qplot(data.rt, data = jso1, geom = "histogram")
qplot(data.rt, data = jso1, geom = "histogram", facets = ~data.cond)



jso_ms <- jso1 %>% 
  filter(data.correct == 1) %>%
  filter(data.cond != "ap") %>%
  group_by(data.cond) %>%
  summarise(rt = mean(data.rt), na.rm = TRUE)

jso_mss <- jso1 %>% 
  filter(data.correct == 1) %>%
  filter(data.cond != "ap") %>%
  group_by(data.cond, data.trialNum) %>%
  summarise(rt = mean(data.rt), na.rm = TRUE)

jso_ms$cih <- aggregate(rt ~ data.cond, jso_mss, ci.high)$rt
jso_ms$cil <- aggregate(rt ~ data.cond, jso_mss, ci.low)$rt


jso_ms$data.cond <- as.factor(jso_ms$data.cond)
levels(jso_ms$data.cond) <- c("dominant-dominant", "dominant-submissive", "submissive-submissive")



p1 <- ggplot(data = jso_ms,
             aes(x=data.cond, y=rt, fill=data.cond)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_errorbar(aes(ymin=rt-cil, ymax=rt+cih),
                width=.2,
                position=position_dodge(.9)) +
  #  coord_cartesian(ylim=c(.9,6)) +
#  scale_y_continuous(breaks=1:6) +
  xlab("Condition") + 
  ylab("Reaction time") +
  ggtitle("Reaction times for identification")
p1

