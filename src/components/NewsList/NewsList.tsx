import withSkeleton from "../../helpers/hock/withSkeleton";
import { Inews } from "../../interfaces";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./styles.module.css";

interface Props {
  news?: Inews[];
}

const NewsList = ({ news }: Props) => {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10);

export default NewsListWithSkeleton;
