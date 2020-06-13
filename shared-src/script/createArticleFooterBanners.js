export default function createArticleFooterBanners() {
  const articleFooterBanners = document.getElementById('article-footer-banners')

  if (document.querySelector('article footer') && articleFooterBanners) {
    document
      .querySelector('article footer')
      .insertBefore(
        articleFooterBanners,
        document.querySelector('.td-post-next-prev')
      )
  }
}
