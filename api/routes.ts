import { Router, Response } from 'express'
import BeritaIndo from './controllers/index'

const router: Router = Router()

router.get('/', (_, res: Response) => {
    const data = {
        listApi: {
            "CNN News": {
                all: "https://berita-indo-api.vercel.app/v1/cnn-news/",
                type: "https://berita-indo-api.vercel.app/v1/cnn-news/:type",
                listType: ["nasional", "internasional", "ekonomi", "olahraga", "teknologi", "hiburan", "gaya-hidup"],
                example: "https://berita-indo-api.vercel.app/v1/cnn-news/ekonomi"
            },
            "CNBC News": {
                all: "https://berita-indo-api.vercel.app/v1/cnbc-news/",
                type: "https://berita-indo-api.vercel.app/v1/cnbc-news/:type",
                listType: ["market", "investment", "news", "entrepreneur", "syariah", "tech", "lifestyle"],
                example: "https://berita-indo-api.vercel.app/v1/cnbc-news/syariah"
            },
            "Republika News": {
                all: "https://berita-indo-api.vercel.app/v1/republika-news/",
                type: "https://berita-indo-api.vercel.app/v1/republika-news/:type",
                listType: ["news", "nusantara", "khazanah", "islam-digest", "internasional", "ekonomi", "sepakbola", "leisure"],
                example: "https://berita-indo-api.vercel.app/v1/republika-news/islam-digest"
            },
            "Tempo News": {
                all: "https://berita-indo-api.vercel.app/v1/tempo-news/",
                type: "https://berita-indo-api.vercel.app/v1/tempo-news/:type",
                listType: ["nasional", "bisnis", "metro", "dunia", "bola", "sport", "cantik", "tekno", "otomotif", "nusantara"],
                example: "https://berita-indo-api.vercel.app/v1/tempo-news/bisnis"
            },
            "Antara News": {
                type: "https://berita-indo-api.vercel.app/v1/antara-news/:type",
                listType: ["terkini", "top-news", "politik", "hukum", "ekonomi", "metro", "sepakbola", "olahraga", "humaniora", "lifestyle", "hiburan", "dunia", "infografik", "tekno", "otomotif", "warta-bumi", "rilis-pers"],
                example: "https://berita-indo-api.vercel.app/v1/antara-news/hukum"
            },
            "Okezone News": {
                all: "https://berita-indo-api.vercel.app/v1/okezone-news",
                listType: ["breaking", "sport", "economy", "lifestyle", "celebrity", "bola", "techno"],
                example: "https://berita-indo-api.vercel.app/v1/okezone-news/bola",
            },
            "BBC News": {
                all: "https://berita-indo-api.vercel.app/v1/bbc-news",
                listType: ["dunia", "berita_indonesia", "olahraga", "majalah", "multimedia"],
                example: "https://berita-indo-api.vercel.app/v1/bbc-news/dunia",
            },
            "Kumparan News": {
                all: "https://berita-indo-api.vercel.app/v1/kumparan-news",
            },
            "Liputan 6 News": {
                all: "https://berita-indo-api.vercel.app/v1/liputan6-news",
            },
            "Tribun News": {
                all: "https://berita-indo-api.vercel.app/v1/tribun-news",
                listType: ["bisnis", "superskor", "sport", "seleb", "lifestyle", "travel", "parapuan", "otomotif", "techno", "ramadan"],
                example: "https://berita-indo-api.vercel.app/v1/tribun-news/techno",
            },
        },
        author: "Satya Wikananda",
        source: "https://github.com/satyawikananda/berita-indo-api"
    }
    return res.status(200).send(data)
})

router.get('/v1/cnn-news/', BeritaIndo.CnnNews.getAllNews)
router.get('/v1/cnn-news/:type', BeritaIndo.CnnNews.getNews)
router.get('/v1/cnbc-news/', BeritaIndo.CnbcNews.getAllNews)
router.get('/v1/cnbc-news/:type', BeritaIndo.CnbcNews.getNews)
router.get('/v1/republika-news/', BeritaIndo.RepublikaNews.getAllNews)
router.get('/v1/republika-news/:type', BeritaIndo.RepublikaNews.getNews)
router.get('/v1/tempo-news/:type', BeritaIndo.TempoNews.getNews)
router.get('/v1/tempo-news/', BeritaIndo.TempoNews.getAllNews)
router.get('/v1/antara-news/:type', BeritaIndo.AntaraNews.getNews)
router.get('/v1/kumparan-news/', BeritaIndo.KumparanNews.getAllNews)
router.get('/v1/okezone-news/', BeritaIndo.OkezoneNews.getAllNews)
router.get('/v1/okezone-news/:type', BeritaIndo.OkezoneNews.getNews)
router.get('/v1/liputan6-news/', BeritaIndo.Liputan6News.getAllNews)
router.get('/v1/bbc-news/:type', BeritaIndo.BbcNews.getNews)
router.get('/v1/bbc-news/', BeritaIndo.BbcNews.getAllNews)
router.get('/v1/tribun-news/:type', BeritaIndo.TribunNews.getNews)
router.get('/v1/tribun-news/', BeritaIndo.TribunNews.getAllNews)

router.all('*', BeritaIndo.notFound)

export default router