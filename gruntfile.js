module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    "src/main/webapp/app/TatamiApp.js",
                    "src/main/webapp/app/shared/topMenu/TopMenuModule.js",
                    "src/main/webapp/app/components/login/LoginModule.js",
                    "src/main/webapp/app/components/about/AboutModule.js",
                    "src/main/webapp/app/components/home/HomeModule.js",
                    "src/main/webapp/app/components/account/AccountModule.js",
                    "src/main/webapp/app/components/admin/AdminModule.js",
                    "src/main/webapp/app/components/about/license/LicenseController.js",
                    "src/main/webapp/app/shared/sidebars/home/HomeSidebarModule.js",
                    "src/main/webapp/app/shared/sidebars/home/HomeSidebarController.js",
                    "src/main/webapp/app/shared/sidebars/profile/ProfileSidebarModule.js",
                    "src/main/webapp/app/shared/sidebars/profile/ProfileSidebarController.js",
                    "src/main/webapp/app/components/home/tag/TagHeaderController.js",
                    "src/main/webapp/app/components/home/search/SearchHeaderController.js",
                    "src/main/webapp/app/components/home/group/GroupHeaderController.js",
                    "src/main/webapp/app/components/home/profile/ProfileHeaderController.js",
                    "src/main/webapp/app/components/home/status/StatusController.js",
                    "src/main/webapp/app/shared/lists/status/withoutContext/StatusListController.js",
                    "src/main/webapp/app/shared/lists/user/UserListController.js",
                    "src/main/webapp/app/shared/topMenu/post/PostModule.js",
                    "src/main/webapp/app/shared/topMenu/post/PostController.js",
                    "src/main/webapp/app/components/home/welcome/WelcomeController.js",
                    "src/main/webapp/app/components/admin/AdminController.js",
                    "src/main/webapp/app/components/admin/AdminService.js",
                    "src/main/webapp/app/components/account/AccountController.js",
                    "src/main/webapp/app/components/account/FormController.js",
                    "src/main/webapp/app/components/account/profile/ProfileModule.js",
                    "src/main/webapp/app/components/account/profile/ProfileController.js",
                    "src/main/webapp/app/components/account/preferences/PreferencesModule.js",
                    "src/main/webapp/app/components/account/preferences/PreferencesController.js",
                    "src/main/webapp/app/components/account/preferences/PreferencesService.js",
                    "src/main/webapp/app/components/account/password/PasswordModule.js",
                    "src/main/webapp/app/components/account/password/PasswordController.js",
                    "src/main/webapp/app/components/account/password/PasswordService.js",
                    "src/main/webapp/app/components/account/files/FilesModule.js",
                    "src/main/webapp/app/components/account/files/FilesController.js",
                    "src/main/webapp/app/components/account/files/FilesService.js",
                    "src/main/webapp/app/components/account/users/UsersModule.js",
                    "src/main/webapp/app/components/account/users/UsersController.js",
                    "src/main/webapp/app/components/account/groups/GroupsModule.js",
                    "src/main/webapp/app/components/account/groups/GroupsController.js",
                    "src/main/webapp/app/components/account/groups/manage/GroupsManageController.js",
                    "src/main/webapp/app/components/account/groups/creation/GroupsCreateController.js",
                    "src/main/webapp/app/components/account/groups/list/GroupListController.js",
                    "src/main/webapp/app/components/account/tags/TagsModule.js",
                    "src/main/webapp/app/components/account/tags/TagsController.js",
                    "src/main/webapp/app/components/account/topPosters/TopPostersModule.js",
                    "src/main/webapp/app/components/account/topPosters/TopPostersController.js",
                    "src/main/webapp/app/components/login/LoginModule.js",
                    "src/main/webapp/app/components/login/manual/ManualLoginController.js",
                    "src/main/webapp/app/components/login/recoverPassword/RecoverPasswordController.js",
                    "src/main/webapp/app/components/login/register/RegisterController.js",
                    "src/main/webapp/app/components/login/google/GoogleLoginController.js",
                    "src/main/webapp/app/components/login/email/EmailRegistrationController.js",
                    "src/main/webapp/app/components/login/RegistrationService.js",
                    "src/main/webapp/app/shared/configs/MarkedConfig.js",
                    "src/main/webapp/app/shared/configs/MomentConfig.js",
                    "src/main/webapp/app/shared/configs/TranslateConfig.js",
                    "src/main/webapp/app/shared/filters/MarkdownFilter.js",
                    "src/main/webapp/app/shared/filters/EmoticonFilter.js",
                    "src/main/webapp/app/shared/filters/PlaceholderFilter.js",
                    "src/main/webapp/app/shared/services/HomeService.js",
                    "src/main/webapp/app/shared/services/StatusService.js",
                    "src/main/webapp/app/shared/services/ProfileService.js",
                    "src/main/webapp/app/shared/services/UserService.js",
                    "src/main/webapp/app/shared/services/GroupService.js",
                    "src/main/webapp/app/shared/services/TagService.js",
                    "src/main/webapp/app/shared/services/GeolocService.js",
                    "src/main/webapp/app/shared/services/SearchService.js",
                    "src/main/webapp/app/shared/services/TopPostersService.js",
                    "src/main/webapp/app/shared/services/UserSession.js",
                    "src/main/webapp/app/shared/services/AuthenticationService.js",
                    "src/main/webapp/app/shared/topMenu/TopMenuController.js"
                ],
                dest: 'src/main/webapp/TATAMI.CONCAT.js'
            }

        },
        comments: {
            your_target: {
                // Target-specific file lists and/or options go here.
                options: {
                    singleline: true,
                    multiline: true
                },
                src: ['src/main/webapp/TATAMI.CONCAT.js'] // files to remove comments from
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'src/main/webapp/TATAMI.CONCAT.js': ['src/main/webapp/TATAMI.CONCAT.js']
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-stripcomments');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['concat', 'comments','uglify']);
};