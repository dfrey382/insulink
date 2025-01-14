<?php return array (
  'barryvdh/laravel-debugbar' => 
  array (
    'providers' => 
    array (
      0 => 'Barryvdh\\Debugbar\\ServiceProvider',
    ),
    'aliases' => 
    array (
      'Debugbar' => 'Barryvdh\\Debugbar\\Facades\\Debugbar',
    ),
  ),
  'barryvdh/laravel-dompdf' => 
  array (
    'providers' => 
    array (
      0 => 'Barryvdh\\DomPDF\\ServiceProvider',
    ),
    'aliases' => 
    array (
      'Pdf' => 'Barryvdh\\DomPDF\\Facade\\Pdf',
      'PDF' => 'Barryvdh\\DomPDF\\Facade\\Pdf',
    ),
  ),
  'barryvdh/laravel-ide-helper' => 
  array (
    'providers' => 
    array (
      0 => 'Barryvdh\\LaravelIdeHelper\\IdeHelperServiceProvider',
    ),
  ),
  'botble/api' => 
  array (
    'providers' => 
    array (
      0 => 'Botble\\Api\\Providers\\ApiServiceProvider',
    ),
    'aliases' => 
    array (
      'ApiHelper' => 'Botble\\Api\\Facades\\ApiHelper',
    ),
  ),
  'botble/assets' => 
  array (
    'providers' => 
    array (
      0 => 'Botble\\Assets\\Providers\\AssetsServiceProvider',
    ),
    'aliases' => 
    array (
      'Assets' => 'Botble\\Assets\\Facades\\AssetsFacade',
    ),
  ),
  'botble/dev-tool' => 
  array (
    'providers' => 
    array (
      0 => 'Botble\\DevTool\\Providers\\DevToolServiceProvider',
    ),
  ),
  'botble/get-started' => 
  array (
    'providers' => 
    array (
      0 => 'Botble\\GetStarted\\Providers\\GetStartedServiceProvider',
    ),
  ),
  'botble/git-commit-checker' => 
  array (
    'providers' => 
    array (
      0 => 'Botble\\GitCommitChecker\\Providers\\GitCommitCheckerServiceProvider',
    ),
  ),
  'botble/menu' => 
  array (
    'providers' => 
    array (
      0 => 'Botble\\Menu\\Providers\\MenuServiceProvider',
    ),
    'aliases' => 
    array (
      'Menu' => 'Botble\\Menu\\Facades\\Menu',
    ),
  ),
  'botble/optimize' => 
  array (
    'providers' => 
    array (
      0 => 'Botble\\Optimize\\Providers\\OptimizeServiceProvider',
    ),
    'aliases' => 
    array (
      'OptimizerHelper' => 'Botble\\Optimize\\Facades\\OptimizerHelper',
    ),
  ),
  'botble/page' => 
  array (
    'providers' => 
    array (
      0 => 'Botble\\Page\\Providers\\PageServiceProvider',
    ),
  ),
  'botble/platform' => 
  array (
    'providers' => 
    array (
      0 => 'Botble\\Base\\Providers\\BaseServiceProvider',
      1 => 'Botble\\Base\\Providers\\CommandServiceProvider',
      2 => 'Botble\\Base\\Providers\\EventServiceProvider',
      3 => 'Botble\\Base\\Providers\\BreadcrumbsServiceProvider',
      4 => 'Botble\\Base\\Providers\\ComposerServiceProvider',
      5 => 'Botble\\Base\\Providers\\MailConfigServiceProvider',
      6 => 'Botble\\Base\\Providers\\FormServiceProvider',
      7 => 'Botble\\Support\\Providers\\SupportServiceProvider',
      8 => 'Botble\\Table\\Providers\\TableServiceProvider',
      9 => 'Botble\\ACL\\Providers\\AclServiceProvider',
      10 => 'Botble\\Dashboard\\Providers\\DashboardServiceProvider',
      11 => 'Botble\\Media\\Providers\\MediaServiceProvider',
      12 => 'Botble\\JsValidation\\Providers\\JsValidationServiceProvider',
      13 => 'Botble\\Chart\\Providers\\ChartServiceProvider',
    ),
    'aliases' => 
    array (
      'Action' => 'Botble\\Base\\Facades\\Action',
      'Assets' => 'Botble\\Base\\Facades\\Assets',
      'BaseHelper' => 'Botble\\Base\\Facades\\BaseHelper',
      'Breadcrumbs' => 'Botble\\Base\\Facades\\Breadcrumbs',
      'DashboardMenu' => 'Botble\\Base\\Facades\\DashboardMenu',
      'EmailHandler' => 'Botble\\Base\\Facades\\EmailHandler',
      'Filter' => 'Botble\\Base\\Facades\\Filter',
      'Form' => 'Botble\\Base\\Facades\\Form',
      'Html' => 'Botble\\Base\\Facades\\Html',
      'MacroableModels' => 'Botble\\Base\\Facades\\MacroableModels',
      'MetaBox' => 'Botble\\Base\\Facades\\MetaBox',
      'PageTitle' => 'Botble\\Base\\Facades\\PageTitle',
      'JsValidator' => 'Botble\\JsValidation\\Facades\\JsValidator',
      'Setting' => 'Botble\\Setting\\Facades\\Setting',
      'RvMedia' => 'Botble\\Media\\Facades\\RvMedia',
    ),
  ),
  'botble/plugin-generator' => 
  array (
    'providers' => 
    array (
      0 => 'Botble\\PluginGenerator\\Providers\\PluginGeneratorServiceProvider',
    ),
  ),
  'botble/plugin-management' => 
  array (
    'providers' => 
    array (
      0 => 'Botble\\PluginManagement\\Providers\\PluginManagementServiceProvider',
    ),
  ),
  'botble/revision' => 
  array (
    'providers' => 
    array (
      0 => 'Botble\\Revision\\Providers\\RevisionServiceProvider',
    ),
  ),
  'botble/seo-helper' => 
  array (
    'providers' => 
    array (
      0 => 'Botble\\SeoHelper\\Providers\\SeoHelperServiceProvider',
    ),
    'aliases' => 
    array (
      'SeoHelper' => 'Botble\\SeoHelper\\Facades\\SeoHelper',
    ),
  ),
  'botble/shortcode' => 
  array (
    'providers' => 
    array (
      0 => 'Botble\\Shortcode\\Providers\\ShortcodeServiceProvider',
    ),
    'aliases' => 
    array (
      'Shortcode' => 'Botble\\Shortcode\\Facades\\Shortcode',
    ),
  ),
  'botble/sitemap' => 
  array (
    'providers' => 
    array (
      0 => 'Botble\\Sitemap\\Providers\\SitemapServiceProvider',
    ),
  ),
  'botble/slug' => 
  array (
    'providers' => 
    array (
      0 => 'Botble\\Slug\\Providers\\SlugServiceProvider',
    ),
    'aliases' => 
    array (
      'SlugHelper' => 'Botble\\Slug\\Facades\\SlugHelper',
    ),
  ),
  'botble/theme' => 
  array (
    'providers' => 
    array (
      0 => 'Botble\\Theme\\Providers\\ThemeServiceProvider',
      1 => 'Botble\\Theme\\Providers\\RouteServiceProvider',
    ),
    'aliases' => 
    array (
      'Theme' => 'Botble\\Theme\\Facades\\Theme',
      'ThemeOption' => 'Botble\\Theme\\Facades\\ThemeOption',
      'ThemeManager' => 'Botble\\Theme\\Facades\\Manager',
      'AdminBar' => 'Botble\\Theme\\Facades\\AdminBar',
      'SiteMapManager' => 'Botble\\Theme\\Facades\\SiteMapManager',
    ),
  ),
  'botble/theme-generator' => 
  array (
    'providers' => 
    array (
      0 => 'Botble\\ThemeGenerator\\Providers\\ThemeGeneratorServiceProvider',
    ),
  ),
  'botble/widget' => 
  array (
    'providers' => 
    array (
      0 => 'Botble\\Widget\\Providers\\WidgetServiceProvider',
    ),
    'aliases' => 
    array (
      'Widget' => 'Botble\\Widget\\Facades\\Widget',
      'WidgetGroup' => 'Botble\\Widget\\Facades\\WidgetGroup',
    ),
  ),
  'botble/widget-generator' => 
  array (
    'providers' => 
    array (
      0 => 'Botble\\WidgetGenerator\\Providers\\WidgetGeneratorServiceProvider',
    ),
  ),
  'fideloper/proxy' => 
  array (
    'providers' => 
    array (
      0 => 'Fideloper\\Proxy\\TrustedProxyServiceProvider',
    ),
  ),
  'intervention/image' => 
  array (
    'providers' => 
    array (
      0 => 'Intervention\\Image\\ImageServiceProvider',
    ),
    'aliases' => 
    array (
      'Image' => 'Intervention\\Image\\Facades\\Image',
    ),
  ),
  'javoscript/laravel-macroable-models' => 
  array (
    'providers' => 
    array (
      0 => 'Javoscript\\MacroableModels\\MacroableModelsServiceProvider',
    ),
    'aliases' => 
    array (
      'MacroableModels' => 'Javoscript\\MacroableModels\\Facades\\MacroableModels',
    ),
  ),
  'kris/laravel-form-builder' => 
  array (
    'providers' => 
    array (
      0 => 'Kris\\LaravelFormBuilder\\FormBuilderServiceProvider',
    ),
    'aliases' => 
    array (
      'FormBuilder' => 'Kris\\LaravelFormBuilder\\Facades\\FormBuilder',
    ),
  ),
  'lab404/laravel-impersonate' => 
  array (
    'providers' => 
    array (
      0 => 'Lab404\\Impersonate\\ImpersonateServiceProvider',
    ),
  ),
  'laravel/sail' => 
  array (
    'providers' => 
    array (
      0 => 'Laravel\\Sail\\SailServiceProvider',
    ),
  ),
  'laravel/sanctum' => 
  array (
    'providers' => 
    array (
      0 => 'Laravel\\Sanctum\\SanctumServiceProvider',
    ),
  ),
  'laravel/socialite' => 
  array (
    'providers' => 
    array (
      0 => 'Laravel\\Socialite\\SocialiteServiceProvider',
    ),
    'aliases' => 
    array (
      'Socialite' => 'Laravel\\Socialite\\Facades\\Socialite',
    ),
  ),
  'laravel/tinker' => 
  array (
    'providers' => 
    array (
      0 => 'Laravel\\Tinker\\TinkerServiceProvider',
    ),
  ),
  'laravel/ui' => 
  array (
    'providers' => 
    array (
      0 => 'Laravel\\Ui\\UiServiceProvider',
    ),
  ),
  'laravelcollective/html' => 
  array (
    'providers' => 
    array (
      0 => 'Collective\\Html\\HtmlServiceProvider',
    ),
    'aliases' => 
    array (
      'Form' => 'Collective\\Html\\FormFacade',
      'Html' => 'Collective\\Html\\HtmlFacade',
    ),
  ),
  'maatwebsite/excel' => 
  array (
    'providers' => 
    array (
      0 => 'Maatwebsite\\Excel\\ExcelServiceProvider',
    ),
    'aliases' => 
    array (
      'Excel' => 'Maatwebsite\\Excel\\Facades\\Excel',
    ),
  ),
  'mews/purifier' => 
  array (
    'providers' => 
    array (
      0 => 'Mews\\Purifier\\PurifierServiceProvider',
    ),
    'aliases' => 
    array (
      'Purifier' => 'Mews\\Purifier\\Facades\\Purifier',
    ),
  ),
  'monarobase/country-list' => 
  array (
    'providers' => 
    array (
      0 => 'Monarobase\\CountryList\\CountryListServiceProvider',
    ),
    'aliases' => 
    array (
      'Countries' => 'Monarobase\\CountryList\\CountryListFacade',
    ),
  ),
  'nesbot/carbon' => 
  array (
    'providers' => 
    array (
      0 => 'Carbon\\Laravel\\ServiceProvider',
    ),
  ),
  'nunomaduro/collision' => 
  array (
    'providers' => 
    array (
      0 => 'NunoMaduro\\Collision\\Adapters\\Laravel\\CollisionServiceProvider',
    ),
  ),
  'nunomaduro/termwind' => 
  array (
    'providers' => 
    array (
      0 => 'Termwind\\Laravel\\TermwindServiceProvider',
    ),
  ),
  'spatie/laravel-feed' => 
  array (
    'providers' => 
    array (
      0 => 'Spatie\\Feed\\FeedServiceProvider',
    ),
  ),
  'spatie/laravel-ignition' => 
  array (
    'providers' => 
    array (
      0 => 'Spatie\\LaravelIgnition\\IgnitionServiceProvider',
    ),
    'aliases' => 
    array (
      'Flare' => 'Spatie\\LaravelIgnition\\Facades\\Flare',
    ),
  ),
  'tightenco/ziggy' => 
  array (
    'providers' => 
    array (
      0 => 'Tightenco\\Ziggy\\ZiggyServiceProvider',
    ),
  ),
  'tucker-eric/eloquentfilter' => 
  array (
    'providers' => 
    array (
      0 => 'EloquentFilter\\ServiceProvider',
    ),
  ),
  'unicodeveloper/laravel-paystack' => 
  array (
    'providers' => 
    array (
      0 => 'Unicodeveloper\\Paystack\\PaystackServiceProvider',
    ),
    'aliases' => 
    array (
      'Paystack' => 'Unicodeveloper\\Paystack\\Facades\\Paystack',
    ),
  ),
  'yajra/laravel-datatables-buttons' => 
  array (
    'providers' => 
    array (
      0 => 'Yajra\\DataTables\\ButtonsServiceProvider',
    ),
  ),
  'yajra/laravel-datatables-html' => 
  array (
    'providers' => 
    array (
      0 => 'Yajra\\DataTables\\HtmlServiceProvider',
    ),
  ),
  'yajra/laravel-datatables-oracle' => 
  array (
    'providers' => 
    array (
      0 => 'Yajra\\DataTables\\DataTablesServiceProvider',
    ),
    'aliases' => 
    array (
      'DataTables' => 'Yajra\\DataTables\\Facades\\DataTables',
    ),
  ),
);