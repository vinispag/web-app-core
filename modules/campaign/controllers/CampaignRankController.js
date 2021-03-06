(function (global) {
	"use strict";

	global.squid.campaign.controller('CampaignRankController', [
		'$scope', 'campaignService', '$routeParams', '$mdMedia',
		function ($scope, campaignService, $routeParams, $mdMedia) {

			$scope.isLoading = false;
			$scope.campaignRanking = [];
			$scope.isSmallDevice = $mdMedia('sm');

			function _getCampaignRank() {
				return campaignService.getRank()
					.$promise
					.then(function (ranking) {
						$scope.campaignRanking = ranking;
						_hideLoader();
					})
					.catch(function (err) {
						console.log(err);
					});
			}

			function _showLoader() {
				$scope.isLoading = true;
			}

			function _hideLoader() {
				$scope.isLoading = false;
			}

			function _init() {
				_showLoader();
				_getCampaignRank();
			}

			function _mock(){
				$scope.campaignRanking = [{
					campaign: {
						tag: 'squidmock'
					},
					ranking: [{
						user: {
							name: 'Nome de teste 01',
							picture: '/err.jpg'
						},
						total: 272
					},
					{
						user: {
							name: '',
							nickname: 'Nickname de teste 02',
							picture: '/err.jpg'
						},
						total: 2871
					},
					{
						user: {
							name: 'Nome de teste 03',
							picture: '/err.jpg'
						},
						total: 24
					}]
				}];
			}

			_init();
			// _mock();
		}
	]);

})(window);