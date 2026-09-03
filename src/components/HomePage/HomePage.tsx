import React from "react";
import {
  HomeContainer,
  HeroSection,
  Title,
  Description,
  FeaturesGrid,
  FeatureCard,
  FeatureTitle,
  FeatureDescription,
} from "./HomePage.styles";

export const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <Title>Покедекс</Title>
        <Description>
          Первым проектом решил сделать галерею карточек по покемонам, так как за раз смог реализовать много моментов, которые необходимы для работы.
        </Description>
      </HeroSection>

       <FeaturesGrid>
        <FeatureCard>
          <FeatureTitle>Фильтрация</FeatureTitle>
          <FeatureDescription>
            Захотелось сделать сложную фильтрацию не по одному параметру, а сразу по трём: 
            номер, имя и тип. Для этого создал кастомный хук <strong>usePokemonFilter</strong>, 
            который принимает все три параметра и возвращает отфильтрованный массив. 
            Фильтры применяются мгновенно без перезагрузки страницы. 
            А чтобы хук не вызывал лишних пересчётов, обернул логику фильтрации в <strong>useMemo</strong> 
            и добавил все зависимости — теперь пересчёт происходит только при изменении 
            значений в инпутах.
            <br /><br />
            <strong>Использовано:</strong> useMemo, кастомный хук
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureTitle>Пагинация</FeatureTitle>
          <FeatureDescription>
            При загрузке всех покемонов (более 1000 записей) возникла необходимость 
            разбить их на страницы, чтобы не перегружать DOM и улучшить восприятие. 
            Использовал компонент <strong>Pagination</strong> из <strong>Material-UI</strong>. 
            Настроил отображение по 12 карточек на страницу. 
            Также реализовал автоматический сброс на первую страницу при изменении фильтров — 
            чтобы пользователь всегда видел актуальные результаты поиска, а не пустую страницу.
            <br /><br />
            <strong>Использовано:</strong> MUI Pagination, useState, useEffect
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureTitle>Кэширование данных</FeatureTitle>
          <FeatureDescription>
            При каждом переходе на страницу карточек данные загружались заново, 
            что создавало лишнюю нагрузку на API и замедляло работу. 
            Решил использовать <strong>React Query</strong> — настроил кэширование 
            с <strong>staleTime</strong> 5 минут, чтобы данные не обновлялись при каждом 
            открытии страницы. Также добавил автоматические повторные попытки: 
            если запрос упал, React Query пробует снова до 3 раз с увеличивающейся 
            задержкой. Сделано с заботой о людях у которых проблемы с интернетом.
            <br /><br />
            <strong>Использовано:</strong> React Query, staleTime, retry, retryDelay
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureTitle>Адаптивность</FeatureTitle>
          <FeatureDescription>
            Изначально карточки отображались в фиксированную сетку, что выглядело 
            хорошо на десктопе, но ломалось на телефонах. Реализовал адаптивную сетку 
            с помощью <strong>CSS Grid</strong> — карточки автоматически 
            перестраиваются в зависимости от ширины экрана: 4 колонки на десктопе, 
            3 на планшете, 2 на телефоне. Добавил медиа-запросы для всех элементов: 
            размер шрифтов, отступы, паддинги — всё подстраивается под устройство.
            <br /><br />
            <strong>Использовано:</strong> CSS Grid, медиа-запросы, Flexbox, адаптивный дизайн
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureTitle>Оптимизация производительности</FeatureTitle>
          <FeatureDescription>
            При фильтрации или смене страницы происходил перерендер всех карточек, 
            что замедляло работу, особенно при большом количестве элементов. 
            Чтобы решить это, обернул компоненты карточек и модалки в <strong>React.memo</strong> — 
            теперь они перерендериваются только при реальном изменении данных. 
            Для функций-обработчиков использовал <strong>useCallback</strong>, чтобы 
            они не создавались заново при каждом рендере. А для пагинированных данных 
            применил <strong>useMemo</strong> — теперь массив карточек пересчитывается 
            только при смене страницы или изменении отфильтрованного списка.
            <br /><br />
            <strong>Использовано:</strong> React.memo, useCallback, useMemo
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureTitle>Работа с API</FeatureTitle>
          <FeatureDescription>
            Столкнулся с тем, что PokeAPI отдаёт только список имён и ссылок, 
            а полная информация о каждом покемоне — по отдельному запросу. 
            Пришлось делать сначала один запрос для получения списка, а затем 
            параллельно загружать данные каждого покемона через <strong>Promise.all</strong>. 
            Это позволило загружать все данные одновременно, а не последовательно, 
            что значительно ускорило загрузку. Также добавил проверку статуса ответа: 
            если сервер вернул ошибку, запрос прерывается с понятным сообщением, 
            а React Query автоматически повторяет попытку.
            <br /><br />
            <strong>Использовано:</strong> Fetch API, Promise.all, обработка ошибок, проверка статуса ответа
          </FeatureDescription>
        </FeatureCard>

         <FeatureCard>
          <FeatureTitle>Skeleton-загрузка</FeatureTitle>
          <FeatureDescription>
            Изначально, пока грузилась карточки, была нажпись в центре экрана "Загрузка...", 
            визуально выглядело не очень и решил сделать временные карточки, как на маркетплейсах, которые показываются пока данные загружаются. 
            Стало в разы приятнее глазу, поэтому пользователи с плохим соединением снова будут мне благодарны.
            <br /><br />
            <strong>Использовано:</strong> MUI Skeleton, компонент SkeletonGrid
          </FeatureDescription>
        </FeatureCard>

         <FeatureCard>
          <FeatureTitle>Дизайн с нейронкой</FeatureTitle>
          <FeatureDescription>
            Для того, чтобы добавить в опыт и работу с нейронкой, а не просто гуглить варианты, решил использовать её для создания визуала. 
            Убил двух зайцев, и похвастался, что использовал её и спас часы возьни с палитрами и стилями.
            Всё что лежит в файлах <strong>CardsPage.styles.ts</strong>, <strong>MainCards.styles.ts</strong> и <strong>HomePage.styles.ts</strong> 
            её рук дело, ручками менял только то, что самому не нравилось.
            <br /><br />
            <strong>Использовано:</strong> Нейронка
          </FeatureDescription>
        </FeatureCard>

      </FeaturesGrid>

    </HomeContainer>
  );
};