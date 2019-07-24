export default function createArticleFooterBanners() {
  const articleFooterBanners = document.getElementById('article-footer-banners')

  if (document.querySelector('article footer')) {
    document
      .querySelector('article footer')
      .insertBefore(
        articleFooterBanners,
        document.querySelector('.td-post-next-prev')
      )
  }
}
