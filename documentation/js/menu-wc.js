'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular-nest documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-2d0fe30d48a397162fd2dd0973567c9f66f9dbc02e3a9e8fbbd294f40f13cb76e6b79c1154baa2835ca3a3f81a6478552df9de938eefc5ddf99042f572bf32cb"' : 'data-bs-target="#xs-components-links-module-AppModule-2d0fe30d48a397162fd2dd0973567c9f66f9dbc02e3a9e8fbbd294f40f13cb76e6b79c1154baa2835ca3a3f81a6478552df9de938eefc5ddf99042f572bf32cb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2d0fe30d48a397162fd2dd0973567c9f66f9dbc02e3a9e8fbbd294f40f13cb76e6b79c1154baa2835ca3a3f81a6478552df9de938eefc5ddf99042f572bf32cb"' :
                                            'id="xs-components-links-module-AppModule-2d0fe30d48a397162fd2dd0973567c9f66f9dbc02e3a9e8fbbd294f40f13cb76e6b79c1154baa2835ca3a3f81a6478552df9de938eefc5ddf99042f572bf32cb"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CoreModule-6ebbe48f8ca033ae968651db60b621aa1323dd011d08c0c4d7c4cc8f0f4ef206af7f0727d99f1748a90c9b098bb8f0a0d6bc4c215676d95b058bcbda842f78f2"' : 'data-bs-target="#xs-components-links-module-CoreModule-6ebbe48f8ca033ae968651db60b621aa1323dd011d08c0c4d7c4cc8f0f4ef206af7f0727d99f1748a90c9b098bb8f0a0d6bc4c215676d95b058bcbda842f78f2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-6ebbe48f8ca033ae968651db60b621aa1323dd011d08c0c4d7c4cc8f0f4ef206af7f0727d99f1748a90c9b098bb8f0a0d6bc4c215676d95b058bcbda842f78f2"' :
                                            'id="xs-components-links-module-CoreModule-6ebbe48f8ca033ae968651db60b621aa1323dd011d08c0c4d7c4cc8f0f4ef206af7f0727d99f1748a90c9b098bb8f0a0d6bc4c215676d95b058bcbda842f78f2"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoreModule-6ebbe48f8ca033ae968651db60b621aa1323dd011d08c0c4d7c4cc8f0f4ef206af7f0727d99f1748a90c9b098bb8f0a0d6bc4c215676d95b058bcbda842f78f2"' : 'data-bs-target="#xs-injectables-links-module-CoreModule-6ebbe48f8ca033ae968651db60b621aa1323dd011d08c0c4d7c4cc8f0f4ef206af7f0727d99f1748a90c9b098bb8f0a0d6bc4c215676d95b058bcbda842f78f2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-6ebbe48f8ca033ae968651db60b621aa1323dd011d08c0c4d7c4cc8f0f4ef206af7f0727d99f1748a90c9b098bb8f0a0d6bc4c215676d95b058bcbda842f78f2"' :
                                        'id="xs-injectables-links-module-CoreModule-6ebbe48f8ca033ae968651db60b621aa1323dd011d08c0c4d7c4cc8f0f4ef206af7f0727d99f1748a90c9b098bb8f0a0d6bc4c215676d95b058bcbda842f78f2"' }>
                                        <li class="link">
                                            <a href="injectables/ApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreRoutingModule.html" data-type="entity-link" >CoreRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ShopModule.html" data-type="entity-link" >ShopModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ShopModule-288a2e80516d8d92409907d57b9686e397489b76e269104d01cc01d789f08b22a78f5abaf1e1686c088a1314d6e648ff6b1b41c572dad6c59d0d18b83a1730aa"' : 'data-bs-target="#xs-components-links-module-ShopModule-288a2e80516d8d92409907d57b9686e397489b76e269104d01cc01d789f08b22a78f5abaf1e1686c088a1314d6e648ff6b1b41c572dad6c59d0d18b83a1730aa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ShopModule-288a2e80516d8d92409907d57b9686e397489b76e269104d01cc01d789f08b22a78f5abaf1e1686c088a1314d6e648ff6b1b41c572dad6c59d0d18b83a1730aa"' :
                                            'id="xs-components-links-module-ShopModule-288a2e80516d8d92409907d57b9686e397489b76e269104d01cc01d789f08b22a78f5abaf1e1686c088a1314d6e648ff6b1b41c572dad6c59d0d18b83a1730aa"' }>
                                            <li class="link">
                                                <a href="components/AddProductFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddProductFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddProductsCSVComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddProductsCSVComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminAnalitycsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminAnalitycsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarouselHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarouselHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExcelProductsTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExcelProductsTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductsContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShoppingCartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoppingCartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShopRoutingModule.html" data-type="entity-link" >ShopRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CarouselItemComponent.html" data-type="entity-link" >CarouselItemComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductsService.html" data-type="entity-link" >ProductsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShopGuard.html" data-type="entity-link" >ShopGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShoppingCartService.html" data-type="entity-link" >ShoppingCartService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/LoginUserInterface.html" data-type="entity-link" >LoginUserInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShoppingCart.html" data-type="entity-link" >ShoppingCart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserInterface.html" data-type="entity-link" >UserInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});